class Warehouse
{
    constructor(parrayprodut)
    {
        this.arrayproduct=parrayprodut;

    }
    average=()=>
    {
        let national=0;
        let imported=0;
        let pricenational=0;
        let priceimported=0;
        let lessprice=0;
        let food=0;
        let dresses=0;
        this.arrayproduct.map(
           p=> {
            if(p.origin==="National")
            {
                national=national+1;
                pricenational=pricenational+p.price;
            }
            if(p.origin==="Imported")
            {
                imported=imported+1;
                priceimported=priceimported+p.price;

            }
            if(p===this.arrayproduct[0])
            {
                lessprice=p.price
            }
            else
            {
                if(lessprice>p.price)
                {
                    lessprice=p.price
                }
            }
            if(p.type==="Food")
            {
                food=food+1;
            }
            if(p.type==="Dress")
            {
                dresses=dresses+1;
            }

            }
        )
        let averagenational=pricenational/national;
        let averageimported=priceimported/imported;
        return  {lessprice,food,dresses,lessprice,averageimported,averagenational}
    }
}
module.exports={Warehouse}