import {makeAutoObservable} from "mobx";

export default class AdmissionStore {
    constructor() {

        this._directions_bachelor = []
        this._selectedDirections_bachelor_name = 0
        this._programs_additional = [
            {
                name: "Оценка стоимости предприятия (бизнеса)",
                price: 50000,
                supervisor: "Самсонов Р.А."
            },
            {
                name: "Менеджмент в кадровой сфере",
                price: 45000,
                supervisor: "Петров А.И."
            }
        ]
        this._selectedPrograms_additional_name = 0

        makeAutoObservable(this)
    }


    setDirections_bachelor(directions_bachelor) {
        this._directions_bachelor = directions_bachelor
    }

    setSelectedDirections_bachelor(selectedDirections_bachelor) {
        this._selectedDirections_bachelor_name = selectedDirections_bachelor
    }

    setPrograms_additional(programs_additional) {
        this._programs_additional = programs_additional
    }

    setSelectedPrograms_additional(selectedPrograms_additional) {
        this._selectedPrograms_additional_name = selectedPrograms_additional
    }


    get directions_bachelor() {
        return this._directions_bachelor
    }

    get selectedDirections_bachelor() {
        return this._selectedDirections_bachelor_name
    }

    get programs_additional() {
        return this._programs_additional
    }

    get selectedPrograms_additional() {
        return this._selectedPrograms_additional_name
    }

}