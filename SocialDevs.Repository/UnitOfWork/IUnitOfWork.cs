using SocialDevs.Entities.Data;
using System;

namespace SocialDevs.Repository.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        int Commit();

        ApplicationDbContext GetDbContext();
    }
}
