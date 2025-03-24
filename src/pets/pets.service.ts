import { Injectable } from '@nestjs/common';
import { Pet } from './entity/pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetInput } from './input/create.input';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) { }

    async findAll(): Promise<Pet[]> {
        return await this.petsRepository.find()
    }

    async createPet(createPetInput: CreatePetInput): Promise<Pet> {
        const newPet = this.petsRepository.create(createPetInput)
        return await this.petsRepository.save(newPet)
    }
}
