import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:id', this.getHouse)
            .post('', this.createHouse)
            .put('/:id', this.addOn)
            .delete('/:id', this.destroyHouse)

    }


    async getHouses(req, res, next) {
        try {
            const houses = await housesService.getHouses()
            return res.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async getHouse(req, res, next) {
        try {
            const houseId = req.params.id
            const house = await housesService.getHouse(houseId)

            return res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async createHouse(req, res, next) {
        try {
            const houseData = req.body
            const house = await housesService.createHouse(houseData)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async addOn(req, res, next) {
        try {
            const houseId = req.params.id
            const houseData = req.body
            const house = await housesService.addOn(houseId, houseData)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async destroyHouse(req, res, next) {
        try {
            const houseId = req.params.id
            const house = await housesService.destroyHouse(houseId)

            return res.send(house)
        } catch (error) {
            next(error)
        }
    }
}