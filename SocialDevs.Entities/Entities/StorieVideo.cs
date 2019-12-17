using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SocialDevs.Entities.Entities
{
    public class StorieVideo : BaseEntity
    {
        [MaxLength(100)]
        public string VideoUrl { get; set; }

        [Required]
        [ForeignKey("VideoStorie")]
        public int PostId { get; set; }

        public virtual Post VideoStorie { get; set; }
    }
}
