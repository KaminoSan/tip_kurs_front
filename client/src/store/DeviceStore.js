import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._devices = []
        this._centers =[]
        this._verificationLogs = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setDevices(devices) {
        this._devices = devices
    }

    setCenters(centers) {
        this._centers = centers
    }

    setVerificationLogs(verificationLogs) {
        this._verificationLogs = verificationLogs
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }

    get verificationLogs() {
        return this._verificationLogs
    }

    get centers() {
        return this._centers
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
