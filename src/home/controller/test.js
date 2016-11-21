'use strict';

import Base from './base.js';

export default class extends think.model.mongo {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction(){
        let model = this.model("user");
        model.insert({"name":"heyu"});
        this.success("insert ok");
    }
}/**
 * Created by heyu on 2016/11/21.
 */
