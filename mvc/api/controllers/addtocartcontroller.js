module.exports={
    inputs:{
        id:{
            type:"number",
            required:true
        }

    },
    fn:async function({id}){
        let product=await Pet_product.findOne({id:id}).populate("product_category_id")
        let subproduct=await Pet_product.findOne({id:id}).populate("subcategory_id")

        
        return this.res.view('pages/addtocart',{product,subproduct})
    }
}