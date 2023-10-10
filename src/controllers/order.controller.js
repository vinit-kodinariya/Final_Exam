const {orderService} = require("../services");

// create order 
const createOrder = async(req,res) =>{
    try {
        const reqBody = req.body;
        const order= await orderService.createOrder(reqBody);

        if(!order){
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success:true,
            message:"order created successfully",
            data : order
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

// get order list
const getOrderList = async(req,res) =>{
    try {
      const orderList = await orderService.getOrderList(req,res);

      res.status(200).json({
        success:true,
        message:"get order list successfully",
        data:orderList
       });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete order 
const deleteOrder = async(req,res) =>{
    try {
        const orderId= req.params.orderId;
        if(!orderId){
            throw new Error("order not found");
        }

        await orderService.deleteOrder(orderId);

        res.status(200).json({
            success:true,
            message:"order deleted successfully",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};



// update order
const updateOrder = async(req,res) =>{
    try {
        const orderId = req.params.orderId;
        const orderExists = await orderService.getOrderById(orderId);

        if(!orderExists){
            throw new Error("order not found");
        }

        await orderService.updateOrder(orderId , req.body);

        res.status(200).json({
            success:true,
            message:"order details updated successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports ={
    createOrder,
    getOrderList,
    deleteOrder,
    updateOrder
}