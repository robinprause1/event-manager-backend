
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StaffImportService } from './staff-import.service';

@Controller('staff-import')
export class StaffImportController {
  constructor(private readonly staffImportService: StaffImportService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<string> {
    await this.staffImportService.importCsvFile(file.buffer);
    return 'File has been uploaded and processed.';
  }
}
