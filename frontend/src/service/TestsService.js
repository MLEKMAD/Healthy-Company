import ApiService from './Api';
class TestsService {
    constructor(){
        this.myApi = new ApiService();
    }
    //TODO:Check TestController find the right path and variables
    async uploadFile(file, idChefProject){
        await this.myApi.post(`/uploadFile/${idChefProject}`,file)
    }

    
    async uploadMultiFiles(files, idChefProject){
        await this.myApi.post(`/uploadMultipleFiles/${idChefProject}`,files,)
    }

    async downloadFile(fileId){
        return await  this.myApi.get(`/downloadFile/${fileId}`)
    }
}
export default TestsService;