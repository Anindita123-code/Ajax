/**
 * CvrApi.js
 * @author Kevin From <kevinfrom@live.dk>
 * @website https://kevinfrom.dk
 */

interface RequestObject {
    url: string,
    method?: string
}

class CvrApi {
    private baseurl: string = 'cvrapi.dk/api';
    private country: string;
    private ssl: boolean;

    /**
     * Constructor
     * 
     * @param country 
     * @param ssl 
     */
    constructor(country: string = 'dk', ssl: boolean = true) {
        this.country = country;
        this.ssl = ssl;
    }

    /**
     * Get URL
     * 
     * @param query 
     * @param type 
     */
    private getUrl(query: string, type: string = 'search') {
        const url = encodeURI(`http${this.ssl ? 's' : ''}://${this.baseurl}?${type}=${query}&country=${this.country}`);

        return {
            url: url
        }
    }

    /**
     * Execute request and return JSON parsed response
     * 
     * @param string url
     */
    private execute(ReqObj: RequestObject) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(ReqObj.method ?? 'GET', ReqObj.url);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }

    /**
     * Search
     * 
     * @param query 
     */
    search(query: string) {
        return this.execute(this.getUrl(query))
    }

    /**
     * Search by name
     * 
     * @param name 
     */
    searchByName(name: string) {
		return this.execute(this.getUrl(name, 'name'))
    }
    
    /**
     * 
     * Search by VAT
     * 
     * @param vat 
     */
    searchByVat(vat: string) {
		return this.execute(this.getUrl(vat, 'vat'))
    }

    /**
     * Search by CVR
     * 
     * @alias searchByVat
     * @param cvr 
     */
    searchByCvr(cvr: string) {
        return this.execute(this.getUrl(cvr, 'vat'))
    }

    /**
     * Search by production unit
     * 
     * @param productionUnit 
     */
    searchByProductionUnit(productionUnit: string) {
		return this.execute(this.getUrl(productionUnit, 'produ'))
    }
    
    /**
     * Search by phone
     * 
     * @param phone 
     */
    searchByPhone(phone: string) {
		return this.execute(this.getUrl(phone, 'phone'))
	}
}
