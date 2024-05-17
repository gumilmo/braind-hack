const serverUrl = "http://localhost:3000";
export const fetchData = async (url: string) => {
    return (await fetch(`http://localhost:3000/${url}`)).json();
}