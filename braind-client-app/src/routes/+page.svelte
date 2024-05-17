<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable/index";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Column, Render, Subscribe, createTable } from "svelte-headless-table";
  import { readable } from "svelte/store";import * as Table from "$lib/components/ui/table";
  import DataTable from "./result-table.svelte";

  import * as Api from "$lib/api-services/select-data.api-service";
  import { TableData } from "$lib/models/table-data.model";

  export let currData: TableData = new TableData();
  export let currColumns: Column<unknown, any>[] = [];
  async function getData(query: string) {
    const tableData: TableData = (await Api.fetchData(
      `get-data?prompt=${query}`,
    )) as unknown as TableData;
    currData = tableData;
    generateTable(tableData);
  }

  function generateTable(data: TableData) {
    const table = createTable(readable(data.Items));
    const columns = table.createColumns(
      data.TableInfo.Columns.map((x) => {
        return table.column({
          accessor: item => (item as any)[x.Accessor],
          header: x.Header,
        });
      }),
    );
    console.log(columns)
    console.log((currData.Items[0] as any)['name'])
    currColumns = columns;
    // const { headerRows, pageRows, tableAttrs, tableBodyAttrs } =
    //   DataTable.createViewModel(columns);
  }
</script>

<div class="wrapper">
  <Resizable.PaneGroup
    direction="horizontal"
    class="min-h-[200px] max-w-md rounded-lg border"
  >
    <Resizable.Pane defaultSize={25}>
      <div class="flex h-full items-center justify-center p-6">
        <div class="grid w-full gap-2">
          <Textarea placeholder="Type your message here." />
          <Button on:click={() => getData("parameter1")}>Send message</Button>
        </div>
      </div>
    </Resizable.Pane>
    <Resizable.Handle withHandle />
    <Resizable.Pane defaultSize={75}>
      <div class="flex h-full items-center justify-center p-6">
        <Table.Root>
          <Table.Caption>A list of your recent invoices.</Table.Caption>
          <Table.Header>
            <Table.Row>
              {#each currData.TableInfo?.Columns ?? [] as column}
                <Table.Head>{column.Header}</Table.Head>
              {/each}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {#each currData.Items ?? [] as item}
            <Table.Row>
              {#each currData.TableInfo?.Columns ?? [] as column}
              <Table.Cell class="text-right">{(item)[column.Accessor]}</Table.Cell>
              {/each}
            </Table.Row>
            {/each}
          </Table.Body>
        </Table.Root>
      </div>
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
