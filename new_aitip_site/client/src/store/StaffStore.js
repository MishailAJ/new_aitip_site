import {makeAutoObservable} from "mobx";

export default class StaffStore {
    constructor() {
        // this._posts = ["Директор", "Главный бухгалтер", "Доцент"]
        this._directionsBac = []
        this._programsAdd = []

        this._staff = []
            // {id: 2, name: "Самсонов", post: "Директор", img: "aitip_logo.png"},
            // {id: 3, name: "Ковалева", post: "Главный бухгалтер", img: "aitip_logo.png"},
            // {id: 4, name: "Самсонов", post: "Директор", img: "aitip_logo.png"},
            // {id: 5, name: "Ковалева", post: "Главный бухгалтер", img: "aitip_logo.png"},
            // {id: 6, name: "Самсонов", post: "Директор", img: "aitip_logo.png"},
            // {id: 7, name: "Ковалева", post: "Главный бухгалтер", img: "aitip_logo.png"}

        this._page = 1
        this._totalCount = 0
        this._limit = 10

        this._selectedStaffer = ""
        this._selectedDirectionsBac = ""
        this._selectedProgramsAdd = ""

        this._cardNumber = 0
        makeAutoObservable(this)
    }

    setDirectionsBac(directionsBac) {
        this._directionsBac = directionsBac
    }

    setProgramsAdd(programsAd) {
        this.programsAd = programsAd
    }

    setStaff(staff) {
        this._staff = staff
    }

    setSelectedStaffer(selectedStaffer) {
        this._selectedStaffer = selectedStaffer
    }

    setSelectedDirectionsBac(selectedDirectionsBac) {
        this._selectedDirectionsBac = selectedDirectionsBac
        this.setPage(1)
    }

    setSelectedProgramsAdd(selectedProgramsAdd) {
        this._selectedProgramsAdd = selectedProgramsAdd
        this.setPage(1)
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setCardNumber(cardNumber) {
        this._cardNumber = cardNumber
    }

    get directionsBac() {
        return this._directionsBac
    }

    get programsAdd() {
        return this._programsAdd
    }

    get staff() {
        return this._staff
    }

    get selectedStaffer() {
        return this._selectedStaffer
    }

    get selectedDirectionsBac() {
        return this._selectedDirectionsBac
    }

    get selectedProgramsAdd() {
        return this._selectedProgramsAdd
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get cardNumber() {
        return this._cardNumber
    }
}