import {makeAutoObservable} from "mobx";

export default class StaffStore {
    constructor() {
        // this._posts = ["Директор", "Главный бухгалтер", "Доцент"]
        this._posts = []
        // this._academic_degree = []
        // this._letter = []

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

        this._selectedPost = ""
        this._selectedAcademic_degree = ""
        this._selectedLetter = ""

        this._cardNumber = 0
        makeAutoObservable(this)
    }

    setPosts(posts) {
        this._posts = posts
    }

    setAcademic_degree(academic_degree) {
        this._academic_degree = academic_degree
    }

    setLetter(letter) {
        this._letter = letter
    }

    setStaff(staff) {
        this._staff = staff
    }

    setSelectedPost(selectedPost) {
        this._selectedPost = selectedPost
        this.setPage(1)
    }

    setSelectedAcademic_degree(selectedAcademic_degree) {
        this._selectedAcademic_degree = selectedAcademic_degree
        this.setPage(1)
    }

    setSelectedLetter(selectedLetter) {
        this._selectedLetter = selectedLetter
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

    get posts() {
        return this._posts
    }

    get academic_degree() {
        return this._academic_degree
    }

    get letter() {
        return this._letter
    }

    get staff() {
        return this._staff
    }

    get selectedPost() {
        return this._selectedPost
    }

    get selectedAcademic_degree() {
        return this._selectedAcademic_degree
    }

    get selectedLetter() {
        return this._selectedLetter
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