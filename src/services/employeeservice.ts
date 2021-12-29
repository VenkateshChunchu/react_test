
import axios from "axios";
import { formatXmlToJSON } from "../common/helper";
import { IEmployee } from "../models/employee";

const sources = [
    {
        name: "json_source",
        url: "json_data.json",
        timeout: 5000
    },
    {
        name: "xml_source",
        url: "xml_data.xml",
        timeout: 10000,
    },
];

export const getData = async (): Promise<IEmployee[]> => {
    let xmltoJsonData: IEmployee[] = [], jsonData: IEmployee[] = [];
    const tasks = sources.map((source) =>
        axios.get(source.url, {
            url: source.url,
            params: source.name,
            timeout: source.timeout,
        }));
    // it will wait until all promises return the value
    const results = await Promise.allSettled(tasks);
    const fulfilled = results.map((response: any) => {
        return {
            source: response.status === "fulfilled" ? response.value.config.params.toString() : "",
            data: response.status === "fulfilled" ? response.value.data : null,
        };
    });
    fulfilled.forEach((x) => {
        if (x.data !== null) {
            if (x.source === "xml_source") {
                // Converting the xml coming from the api response into JSON
                xmltoJsonData = formatXmlToJSON(x.data);
            }
            if (x.source === "json_source") {
                jsonData = x.data;
            }
        }
    });

    // Merging two list into single list
    let result = [...jsonData, ...xmltoJsonData];
    // Sort by id
    result = result.sort((x, y) => x.id - y.id);
    return result;
};
