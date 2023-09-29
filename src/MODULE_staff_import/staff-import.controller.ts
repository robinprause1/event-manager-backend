
import { Controller, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StaffImportService } from './staff-import.service';

@Controller('staff-import')
export class StaffImportController {
  constructor(private readonly staffImportService: StaffImportService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<any> {
    try {
      await this.staffImportService.importCsvFile(file.buffer);
      return {
        message: 'File has been uploaded and processed.',
        status: HttpStatus.OK,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
