import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LineController } from './line.controller';
import { LineService } from './line.service';
import { LineSchema } from './line.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Line', schema: LineSchema }])
  ],
  controllers: [LineController],
  providers: [LineService],
})
export class LineModule {}
