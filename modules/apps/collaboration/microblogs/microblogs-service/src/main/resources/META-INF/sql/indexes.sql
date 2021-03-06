create index IX_1D8CE137 on MicroblogsEntry (companyId, creatorClassNameId, creatorClassPK, type_);
create index IX_CA299EF2 on MicroblogsEntry (companyId, creatorClassNameId, type_);
create index IX_14ACFA9 on MicroblogsEntry (creatorClassNameId, creatorClassPK, type_);
create index IX_6AA6B164 on MicroblogsEntry (creatorClassNameId, type_);
create index IX_6BD29B9C on MicroblogsEntry (type_, parentMicroblogsEntryId);
create index IX_8F04FC09 on MicroblogsEntry (userId, createDate, type_, socialRelationType);
create index IX_92BA6F0 on MicroblogsEntry (userId, type_);