import type { Schema, Struct } from '@strapi/strapi';

export interface AboutTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface FooterQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_quick_links';
  info: {
    displayName: 'quickLink';
  };
  attributes: {
    hoverColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface FooterResourceLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_resource_links';
  info: {
    displayName: 'resourceLink';
  };
  attributes: {
    hoverColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'socialLink';
  };
  attributes: {
    color: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['Facebook', 'Instagram', 'LinkedIn']
    >;
    url: Schema.Attribute.String;
  };
}

export interface HomeBlog extends Struct.ComponentSchema {
  collectionName: 'components_home_blogs';
  info: {
    displayName: 'blog';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_home_services';
  info: {
    displayName: 'HomeServices';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    color_title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    lucide_icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePortfolio extends Struct.ComponentSchema {
  collectionName: 'components_home_portfolios';
  info: {
    displayName: 'portfolio';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeSlidingText extends Struct.ComponentSchema {
  collectionName: 'components_home_sliding_texts';
  info: {
    displayName: 'SlidingText';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial_cards';
  info: {
    displayName: 'testimonial-card';
  };
  attributes: {
    from: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface HomeUnelmaSlider extends Struct.ComponentSchema {
  collectionName: 'unelma_sliders';
  info: {
    displayName: 'UnelmaSlider';
    icon: 'slideshow';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface HomeWorkProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_work_processes';
  info: {
    displayName: 'workProcess';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OrderCartItem extends Struct.ComponentSchema {
  collectionName: 'components_order_cart_items';
  info: {
    displayName: 'cart-item';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    product_id: Schema.Attribute.Integer;
    product_name: Schema.Attribute.String;
    quantity: Schema.Attribute.Integer;
    subtotal: Schema.Attribute.Decimal;
  };
}

export interface ProductsProductsCard extends Struct.ComponentSchema {
  collectionName: 'components_products_products_cards';
  info: {
    displayName: 'ProductsCard';
  };
  attributes: {
    product_details: Schema.Attribute.RichText;
    product_image: Schema.Attribute.Media<'images', true>;
    product_price: Schema.Attribute.Decimal;
    product_title: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    CopyrightText: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.team': AboutTeam;
      'footer.quick-link': FooterQuickLink;
      'footer.resource-link': FooterResourceLink;
      'footer.social-link': FooterSocialLink;
      'home.blog': HomeBlog;
      'home.home-services': HomeHomeServices;
      'home.portfolio': HomePortfolio;
      'home.sliding-text': HomeSlidingText;
      'home.testimonial-card': HomeTestimonialCard;
      'home.unelma-slider': HomeUnelmaSlider;
      'home.work-process': HomeWorkProcess;
      'order.cart-item': OrderCartItem;
      'products.products-card': ProductsProductsCard;
      'shared.footer': SharedFooter;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
