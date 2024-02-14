export function useExternalApi() {
    const getStockInfoListApi = async (params?: any) => {
        const requestParams = {
            code: params.code ? params.code : "",
            companyname: "",
            sector17code: params.sector17code ? params.sector17code : "",
            page: params.page ? params.page.toString() : ""
        }
        const parameter = new URLSearchParams(requestParams);
        const url = 'http://localhost:3005/api/v1/stockInfo?' + parameter
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            const res = await response.json()
            return res
        } catch (error) {
            console.error(error);
            throw error
        }
    }
    const getStockInfoDetailApi = async (params?: any) => {
        const requestParams = {
            code: params ? params : "",
        }
        const parameter = new URLSearchParams(requestParams);
        const url = 'http://localhost:3005/api/v1/stockInfo_detail?' + parameter
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            const res = await response.json()
            return res
        } catch (error) {
            console.error(error);
            throw error
        }
    }
    const postExportCsv = async (params?: any) => {
        // codesは配列
        const requestParameter = {
            codes: params
        }
        try {
            const response = await fetch('http://localhost:3005/api/v1/export', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestParameter)
            })
            const res = await response.json()
            return res
        } catch (error) {
            console.error(error);
            throw error
        }
    }
    return {getStockInfoListApi, getStockInfoDetailApi, postExportCsv}
}