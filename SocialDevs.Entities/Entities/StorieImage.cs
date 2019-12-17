using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SocialDevs.Entities.Entities
{
    public class StorieImage : BaseEntity
    {
        [MaxLength(100)]
        public string ImageUrl { get; set; }

        [Required]
        [ForeignKey("ImageStorie")]
        public int PostId { get; set; }

        public virtual Post ImageStorie { get; set; }
    }
}
