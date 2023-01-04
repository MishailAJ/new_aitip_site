import {makeAutoObservable} from "mobx";

export default class AdmissionStore {
    constructor() {

        this._directions_bachelor = []
        this._selectedDirections_bachelor_name = ""
        this._directions_additional = []
        this._selectedDirections_additional_name = ""

        makeAutoObservable(this)
    }


    setDirections_bachelor(directions_bachelor) {
        this._directions_bachelor = directions_bachelor
    }

    setSelectedDirections_bachelor(selectedDirections_bachelor) {
        this._selectedDirections_bachelor_name = selectedDirections_bachelor
    }

    setDirections_additional(directions_additional) {
        this._directions_additional = directions_additional
    }

    setSelectedDirections_additional(selectedDirections_additional) {
        this._selectedDirections_additional_name = selectedDirections_additional
    }


    get directions_bachelor() {
        return this._directions_bachelor
    }

    get selectedDirections_bachelor() {
        return this._selectedDirections_bachelor_name
    }

    get directions_additional() {
        return this._directions_additional
    }

    get selectedDirections_additional() {
        return this._selectedDirections_additional_name
    }

}