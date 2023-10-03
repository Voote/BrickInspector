interface ExternalIds {
  BrickLink: string[];
  BrickOwl: string[];
  Brickset: string[];
  LDraw: string[];
  LEGO: string[];
}

interface PartProps {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string;
  external_ids: ExternalIds;
  print_of: null | string; // Adjust the type if "print_of" can be other than null
}

interface ColorProps {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
}

interface ResultItem {
  id: number;
  inv_part_id: number;
  part: PartProps;
  color: ColorProps;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}

export interface FetchedData {
  count: number;
  next: null | string; // Adjust the type if "next" can be other than null
  previous: null | string; // Adjust the type if "previous" can be other than null
  results: ResultItem[];
}

export interface SetInfoProps {
  set_num: string;
  name: string;
  year: number;
  theme_id: number;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}
