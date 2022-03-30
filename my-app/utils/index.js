import axios from "axios";

export async function subgraphQuery(query) {
    try {
        // Replace YOUR-SUBGRAPH-URL with the url from your subgraph
        const SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/digitalsimboja/learnweb3";
        const response = await axios.post(SUBGRAPH_URL, {
            query,
        });
        if (response.data.errors) {
            console.error(response.data.errors);
            throw new Error(`Error making subgraph query ${response.data.errors}`);
        }
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error(`Couldnot query subgraph ${error.message}`);
    }
}