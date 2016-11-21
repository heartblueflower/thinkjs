'use strict';

import Base from './base.js';

export default class extends Base{
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction(){
        await this.model("user").add({"name":"heyu"});
        let getuserinfo=await this.session("username");
        console.log(getuserinfo);
        let userinfo=await this.session("username","heyu");
        this.success("insert ok");
    }
}/**
 * Created by heyu on 2016/11/21.
 */
