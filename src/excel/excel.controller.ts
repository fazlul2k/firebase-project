import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
const reader = require('xlsx')
// const file = require("../../public/test.xlsx")
import { Express } from 'express'
@Controller('file')
export class ExcelController {

    @Get()
    getdata(){
        return 'hello'
    }

    @Post('upload')
    @UseInterceptors(AnyFilesInterceptor({
        dest:"./uploads",
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
    }


    @Get(':imgpath')
    downloadFile(@Param('imgpath') image,@Res() res){
       return res.sendFile(image, {root: 'uploads'})

    }
}
