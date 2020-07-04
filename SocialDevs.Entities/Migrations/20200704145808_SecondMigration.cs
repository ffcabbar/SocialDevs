using Microsoft.EntityFrameworkCore.Migrations;

namespace SocialDevs.Entities.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropUniqueConstraint(
                name: "AK_UserRole_UserId_RoleId",
                table: "UserRole");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_UserLogin_LoginProvider_ProviderKey",
                table: "UserLogin");

            migrationBuilder.CreateIndex(
                name: "IX_UserRole_UserId",
                table: "UserRole",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_UserRole_UserId",
                table: "UserRole");

            migrationBuilder.AddUniqueConstraint(
                name: "AK_UserRole_UserId_RoleId",
                table: "UserRole",
                columns: new[] { "UserId", "RoleId" });

            migrationBuilder.AddUniqueConstraint(
                name: "AK_UserLogin_LoginProvider_ProviderKey",
                table: "UserLogin",
                columns: new[] { "LoginProvider", "ProviderKey" });
        }
    }
}
