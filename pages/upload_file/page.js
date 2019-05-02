import BasePage from '../base.page';

class UploadFilePage extends BasePage {


    get upload_file_input(){ return  $('input[id="file-upload"]'); }

    open(){
        super.open('upload');
    }

    uploadAnyFile(path) {
        console.log("Upload Method....");
        if (this.upload_file_input.waitForExist()) {
            console.log("Set Path for upload file...")
            this.upload_file_input.chooseFile(path);
        }
        browser.pause(500000);
    }

}

export default new UploadFilePage();