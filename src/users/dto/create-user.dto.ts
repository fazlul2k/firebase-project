import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    
    @ApiProperty()
    id: string;
   
    @ApiProperty()
    name: string;

    @ApiProperty({required: false})
    age?:number;

    @ApiProperty()
    email:string;


}
