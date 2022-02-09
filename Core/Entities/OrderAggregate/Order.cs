using System;
using System.Collections.Generic;

namespace Core.Entities.OrderAggregate
{
    public class Order : BaseEntity
    {
        public Order()
        {
        }

        public Order(IReadOnlyList<OrderItem> orderItems,string buyerEmail,
         Address shipToAddress, DeliveryMethod deliveryMethod,decimal subtotal)
        {
            BuyerEmail = buyerEmail;
            ShipToAddress = shipToAddress;
            DeliveryMethod = deliveryMethod;
            OrderItems = orderItems;
            Subtotal = subtotal;
        }

        public string BuyerEmail { get; set; } 

       public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now; 

       public Address ShipToAddress {get; set;}

       public  DeliveryMethod DeliveryMethod { get; set; }

       public IReadOnlyList<OrderItem> OrderItems { get; set; }

        //Order items * qty
       public decimal Subtotal { get; set; }

       public OrderStatus Status { get; set; } = OrderStatus.Pending;

        //For Payment Method
       public string PaymentIntentId {get; set;}

       public decimal GetTotal()
            {
                return Subtotal + DeliveryMethod.Price;
            }
    }
}