import BasePage from '../base.page';

class UploadFilePage extends BasePage {


    get upload_file_input(){ return  $('input[id="file-upload"]'); }

    open(){
        super.open('upload');
    }

    uploadAnyFile(path) {
        browser.pause(5000);
        this.upload_file_input.waitForExist();
        this.upload_file_input.chooseFile(path);
        browser.pause(500000);
    }

}

export default new UploadFilePage();