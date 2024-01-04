import React from "react";

const TaxiSearchSection = () => {
  return (
    <>
      <div className="mx-auto my-8 max-w-screen-lg h-full">
        <iframe
          className="w-full"
          style={{ minHeight: 400 }}
          src="https://new-widget.kiwitaxi.com/#/?language=en&display_currency=USD&country%5Bname%5D%5B0%5D=&place_from=&place_to=&transfers_limit=10&transfer_options=&transfer_options_limit=10&height=&type=&ref_params%5Btpo%5D=285de8cc11ce4c508330ffc0a-507485&ref_params%5Btpo_bid%5D=&root_background=%23f5f5f5&button_font_color=%23ffffff&button_background=%23239a54&button_background_hover=%230274da&widget_background=%23EE1F35&placeinput_font_color=%23c8ced4&placeinput_background=%23ffffff&placeinput_background_label=%23c8ced4&icon-center_background=%23ffffff&icon-center_color=%236c7c8c&icon-center_background_mobile=%23f9ac1a&icon-center_color_mobile=%23ffffff&autocomplete_font_color=%23373f47&autocomplete_background=%23ffffff&autocomplete_select_background=%23ffffff&autocomplete_select_font_color=%23239a54&loader_color=%23f9ac1a&empty_color=%23373f47&info_caption_color=%234a4a4a&info_icon_color=%234a4a4a&info_icon_background_color=%23fff0cc&info_icon_border_color=%23ffffff&class_header_color=%236c7c8c&class_button_font_color=%23ffffff&class_button_background=%2326a65b&class_button_background_hover=%230274da&class_font_color=%23373f47&class_background=%23ffffff&class_comment_font=%23bfc0c4&class_comment_background=%23bfc0c4&more_font_color=%230267c1&more_background=&more_background_hover=&notification_border_color=%23e37f17&notification_background=%23f6f1ec&notification_color=%23373f47&transfer_font_color=%23373f47&transfer_background=%23f6f7f8&transfer_background_hover=%23f6f7f8&refx2s6d=https%3A%2F%2Ftravelfly.ai%2Ftaxi%2F"
        ></iframe>
      </div>
    </>
  );
};

export default TaxiSearchSection;
