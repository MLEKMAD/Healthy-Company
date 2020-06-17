import ApiService from './Api';
class TestsService {
    constructor(){
        this.myApi = new ApiService();
    }
    //TODO:Check TestController find the right path and variables
    async uploadFile(file, idChefProject){
        await this.myApi.post(`/uploadFile/${idChefProject}?file=${file}`)
    }
}