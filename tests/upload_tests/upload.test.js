import uploadFilePage from '../../pages/upload_file/page';

describe('Tests related to Login page', () => {
    beforeEach('Navigate to Login page', () => {
        uploadFilePage.open();
    });

    it('Login should failed with invalid credentials.', () => {
        uploadFilePage.uploadAnyFile("README.md");
    });

});