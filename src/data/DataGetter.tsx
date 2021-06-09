import axios from "axios";
import DataModel from "./DataModel";
import yaml from "js-yaml"

export default class DataGetter {

    dataUrl: string;

    constructor(url: string) {
        this.dataUrl = url;
    }

    Get(): Promise<DataModel> {
        return axios
            .get<string>(`${this.dataUrl}?${Math.round(Date.now() / 1000)}`)
            .then(x => {
                if (x.status === 200){
                    const doc = yaml.load(x.data);
                    return new DataModel(doc);
                }
            }).catch(c => {
                console.log(c);
                return c;
            });
    }
}