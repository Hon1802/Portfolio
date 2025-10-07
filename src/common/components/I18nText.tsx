import React from "react";
import { useTranslation } from "react-i18next";

type I18nTextProps = {
  i18nKey: string;
  values?: Record<string, unknown>;
  as?: React.ElementType;
  className?: string;
};

const I18nText: React.FC<I18nTextProps> = ({ i18nKey, values, as: Tag = "p", className }) => {
  const { t } = useTranslation();
  return <Tag className={className}>{t(i18nKey, values)}</Tag>;
};

export default I18nText;
