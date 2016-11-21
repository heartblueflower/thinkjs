'use strict';

import Base from './base.js';

export default class extends think.model.mongo {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction(){
        let model = this.model("user");
        await model.add({"name":"heyu"});
        this.success("insert ok");
    }
}/**
 * Created by heyu on 2016/11/21.
 */
