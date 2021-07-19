using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
        //where criteria
         Expression<Func<T, bool>> Criteria { get; }

         //using for return
         List<Expression<Func<T, object>>> Includes { get;}
    }
}