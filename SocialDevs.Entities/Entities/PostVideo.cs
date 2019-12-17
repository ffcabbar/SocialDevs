using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SocialDevs.Entities.Entities
{
    public class PostVideo : BaseEntity
    {
        [MaxLength(100)]
        public string VideoUrl { get; set; }

        [Required]
        [ForeignKey("VideoPost")]
        public int PostId { get; set; }

        public virtual Post VideoPost { get; set; }
    }
}
