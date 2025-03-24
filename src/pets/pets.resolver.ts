
import { Pet } from "./entity/pet.entity";
import { CreatePetInput } from "./input/create.input";
import { PetsService } from "./pets.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService: PetsService) { }

    @Query(() => [Pet])
    async pets(): Promise<Pet[]> {
        return await this.petService.findAll()
    }

    @Mutation(() => Pet)
    async createPet(@Args("createPetInput") createPetInput: CreatePetInput): Promise<Pet> {
        return await this.petService.createPet(createPetInput)
    }
}
