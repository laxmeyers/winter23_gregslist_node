import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class HousesService{
    async addOn(houseId, houseData) {
        const foundHouse = await this.getHouse(houseId)
        foundHouse.description = houseData.description || foundHouse.description
        foundHouse.price = houseData.price || foundHouse.price

        await foundHouse.save()
        return foundHouse
    }

    async destroyHouse(houseId) {
        const house = await this.getHouse(houseId)
        await house.remove()
        return house
    }

    async getHouse(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest('Invalid House Id')
        }
        return house
    }

    async  createHouse(houseData) {
        const house = await dbContext.Houses.create(houseData)
        return house
    }

    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

}

export const housesService = new HousesService()