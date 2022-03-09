/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { IVehicle } from '~/interfaces/vehicle';
import { VehicleApi } from '~/api/base';
import {
    addUserVehicles,
    getMakes,
    getModels,
    getUserVehicles,
    getVehicleByVin,
    getVehicles,
    getYears,
    removeUserVehicles,
} from '~/fake-server/endpoints';

export class FakeVehicleApi extends VehicleApi {
    getYears(): Promise<number[]> {
        return getYears();
    }

    getMakes(): Promise<string[]> {
        return getMakes();
    }

    getModels(make: string): Promise<string[]> {
        return getModels(make);
    }

    getVehicles(make: string): Promise<IVehicle[]> {
        return getVehicles(make);
    }

    getVehicleByVin(vin: string): Promise<IVehicle> {
        return getVehicleByVin(vin);
    }

    getUserVehicles(): Promise<IVehicle[]> {
        return getUserVehicles();
    }

    addUserVehicle(vehicleId: number): Promise<void> {
        return addUserVehicles(vehicleId);
    }

    removeUserVehicle(vehicleId: number): Promise<void> {
        return removeUserVehicles(vehicleId);
    }
}
