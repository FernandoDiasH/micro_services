import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/database/typeorm/base.repositroy";
import { Repository } from "typeorm";
import { CreditConfig } from "./entity/creditConfig.entity";

@Injectable()
export class CreditConfigRepository extends BaseRepository<CreditConfig>{

    constructor(
        @InjectRepository(CreditConfig) model: Repository<CreditConfig>
    ){
        super( model )
    }
}