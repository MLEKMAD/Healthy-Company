package com.example.demo.payload;

public class UploadFileResponse {
    private String fileName;
    private String fileDownloadUri;
    private long size;

    public UploadFileResponse(String fileName, String fileDownloadUri, long size) {
        this.fileName = fileName;
        this.fileDownloadUri = fileDownloadUri;

        this.size = size;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileDownloadUri() {
        return fileDownloadUri;
    }

    public void setFileDownloadUri(String fileDownloadUri) {
        this.fileDownloadUri = fileDownloadUri;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }
}