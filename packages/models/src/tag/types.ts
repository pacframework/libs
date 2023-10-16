type TagType = 'DI' | 'DO' | 'AI' | 'AO';
type TagProps = {
  description: string; // "DESCRIPTION"
  name: string; // "TAGNAME"
  SCALE: unknown; // todo define proper name, originally "SCALE"
  UNIT: unknown;
  FRMT: unknown;
  type: TagType & 'NAO' | 'NDO'; // todo what is NAO and NDO?
  sourceAddress: string; // todo define proper name, originally "SRCADR"
  channelAddress: string; // todo define proper name, originally "CH"
  CHID: unknown; // todo define proper name, originally "CHID"
  channelType: string; // todo define proper name, originally "TYPE"
  // @deprecated use channelType instead
  channelSubType: string; // todo define proper name, originally "SUBTYPE"
  moduleId: string; // todo define proper name, originally "MODID"
  deviceId: string; // todo define proper name, originally "DEV"
  moduleNumber: string; // todo define proper name, originally "MODNMB"
  moduleAlias: string; // todo define proper name, originally "MODANM"
  actuatorName: string; // todo define proper name, originally "ACTTR"
  actuatorType: string; // todo define proper name, originally "ACTTYPE"
  TOPN: unknown; // todo define proper name, originally "TOPN"
};

export type Tag = {
  type: TagType;
  state: 'valid' | 'inv_duplname' | 'inv_duplid'| 'inv_name' | 'inv_noname' | 'inv_id';
  props: TagProps;

}
