import ApiService from './Api';
class RecommandationService {
    constructor(){
        this.myApi = new ApiService();
    }
    //TODO:Check TestController find the right path and variables
    async uploadRecFile(file, idChefProject){
        await this.myApi.post(`/uploadFileRec/${idChefProject}`,file)
    }

    async uploadMultiRecFiles(files, idChefProject){
        await this.myApi.post(`/uploadMultipleFilesRec/${idChefProject}`,files)
    }

    async downloadRecFile(fileId){
        return await  this.myApi.get(`/downloadFileRec/${fileId}`)
    }


}
export default RecommandationService;