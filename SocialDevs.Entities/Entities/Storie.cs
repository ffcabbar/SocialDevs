using System.Collections.Generic;

namespace SocialDevs.Entities.Entities
{
    public class Storie : BaseEntity
    {
        public Storie()
        {
            StorieImages = new HashSet<StorieImage>();
            StorieVideos = new HashSet<StorieVideo>();
        }
        public string Text { get; set; }
        public int? StorieType { get; set; }

        public virtual ICollection<StorieImage> StorieImages { get; set; }
        public virtual ICollection<StorieVideo> StorieVideos { get; set; }
    }
}
