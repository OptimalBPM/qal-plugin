export function transformation_form() {
    return [
        {
            "type": "fieldset",
            "title": "Actions on destination",
            "items": [
                {
                    "title": "Insert",
                    "key": "insert",
                    "description": "Insert items in source, but not in destination",
                    "type": "checkbox",
                    "notitle": false
                },
                {
                    "title": "Delete",
                    "key": "delete",
                    "description": "Delete items in destination, but not in source",
                    "type": "checkbox"
                },
                {
                    "title": "Update",
                    "key": "update",
                    "description": "Update if item in source, but not in destination",
                    "type": "checkbox"
                }
            ]
        },
        {
            "title": "SQL to run after merge",
            "description": "If the destination is a RDBMS, this SQL statement will be run after the merge is done.",
            "key": "post_execute_sql",
            "type": "textarea"
        },
        {
            "type": "fieldset",
            "title": "Resources",
            "description": "The resources involved, in a merge, one must be \"source\" and another \" destination\"",
            "items": [
                {
                    "key": "resources",
                    "description": "The resources involved, in a merge, one must be \"source\" and another \" destination\"",
                    "notitle": true,
                    "type": "array",
                    "items": [
                        "subforms",
                        {
                            "type": "formselect",
                            "title": "Type of resource",
                            "titleMap": [
                                {
                                    "name": "Flatfile",
                                    "value": 0
                                },
                                {
                                    "name": "XPath",
                                    "value": 1
                                },
                                {
                                    "name": "RDBMS",
                                    "value": 2
                                }
                            ],
                            "items": [
                                {
                                    "title": "Flatfile",
                                    "type": "fieldset",
                                    "items": [
                                        {
                                            "key": "resources[].uuid",
                                            "type": "string",
                                            "title": "uuid",
                                            "description": "The Identifier of the resource"

                                        },
                                        {
                                            "key": "resources[].type",
                                            "type": "string",
                                            "title": "type",
                                            "description": "The type of the resource"

                                        },
                                        {
                                            "key": "resources[].filename",
                                            "type": "string",
                                            "title": "Filename",
                                            "description": "The name of the file"

                                        },
                                        {
                                            "key": "resources[].fieldnames",
                                            "type": "array",
                                            "title": "Field names",
                                            "description": "The names of the fields(field1,field2 - if applicable, see has_header)",
                                            "items": [
                                                {"type": "string"}
                                            ]

                                        },
                                        {
                                            "key": "resources[].csv_dialect",
                                            "type": "select",
                                            "title": "CSV dialect",
                                            "titleMap": [
                                                {"name": "excel-tab", "value": "excel-tab"},
                                                {"name": "excel", "value": "excel"},
                                                {"name": "unix", "value": "unix"}
                                            ],
                                            "description": "Specifies the csv dialect, can be 'excel-tab', 'excel' or 'unix'. Do not use for now.",

                                        },
                                        {
                                            "key": "resources[].quoting",
                                            "type": "select",
                                            "title": "Quoting",
                                            "titleMap": [
                                                {"name": "No quoting at all, quotes will be treated as values", "value": "None"},
                                                {"name": "Quoting is only used when necessary", "value": "MINIMAL"},
                                                {"name": "Quoting is applied used on all fields", "value": "ALL"},
                                                {"name": "excel-tab", "value": "excel-tab"},
                                                {"name": "Non-numeric fields are quoted", "value": "NONNUMERIC"}
                                            ],
                                            "description": "To what degree does the file employ quoting?.",

                                        },
                                        {
                                            "key": "resources[].delimiter",
                                            "type": "string",
                                            "title": "Delimiter",
                                            "description": "The delimiter, typically \";\", \",\" or \"|\" "
                                        },
                                        {
                                            "key": "resources[].has_header",
                                            "type": "string",
                                            "title": "Has header",
                                            "description": "Checked if data begins with a header row containing field names"

                                        },
                                        {
                                            "key": "resources[].quotechar",
                                            "type": "string",
                                            "title": "Quote character",
                                            "description": "What character to use for quoting. Normally \" (citation)."
                                        },
                                        {
                                            "key": "resources[].escapechar",
                                            "type": "string",
                                            "title": "Escape character",
                                            "description": "What character is used to escape special characters, typically \\. (backslash)"
                                        },
                                        {
                                            "key": "resources[].lineterminator",
                                            "type": "string",
                                            "title": "Line terminator",
                                            "description": "What character is used to indicate the end of a line. typically \\n. (Newline)"
                                        },
                                        {
                                            "key": "resources[].skipinitialspace",
                                            "type": "string",
                                            "title": "Skip initial spaces",
                                            "description": "True if initial spaces should be disregarded"
                                        }

                                    ]
                                },
                                {
                                    "title": "XPath",
                                    "type": "fieldset",
                                    "items": [
                                        {
                                            "key": "resources[].uuid",
                                            "type": "string",
                                            "title": "uuid",
                                            "description": "The Identifier of the resource"

                                        },
                                        {
                                            "key": "resources[].type",
                                            "type": "string",
                                            "title": "type",
                                            "description": "The type of the resource"

                                        },
                                        {
                                            "key": "resources[].delimiter",
                                            "type": "string",
                                            "title": "Delimiter",
                                            "description": "The delimiter, typically \";\", \",\" or \"|\" "
                                        },
                                        {
                                            "key": "resources[].has_header",
                                            "type": "string",
                                            "title": "Has header",
                                            "description": "Checked if data begins with a header row containing field names",

                                        },
                                        {
                                            "key": "resources[].filename",
                                            "type": "string",
                                            "title": "Filename",
                                            "description": "Checked if data begins with a header row containing field names",

                                        }

                                    ]
                                },
                                {
                                    "title": "RDBMS",
                                    "type": "fieldset",
                                    "items": [
                                        {
                                            "key": "resources[].uuid",
                                            "type": "string",
                                            "title": "uuid",
                                            "description": "The Identifier of the resource"

                                        },
                                        {
                                            "key": "resources[].type",
                                            "type": "string",
                                            "title": "type",
                                            "description": "The type of the resource"

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "fieldset",
            "title": "Field mappings",
            "items": [
                {
                    "key": "mappings",
                    "notitle": true,
                    "type": "array",
                    "items": [
                        {
                            "key": "mappings[].dest_reference",
                            "title": "Destination reference",
                            "description": "The name of the destination field"
                            // TODO: Add lookups to all feld mappings later on.
                        },
                        {
                            "key": "mappings[].is_key",
                            "title": "Destination is a key field",
                            "description": "If the destination field is a key field, it is used to match source and destination items"
                        },
                        {
                            "key": "mappings[].src_datatype",
                            "title": "The datatype of the source",
                            // Exclude the "datatypes" type, TOOD: What does this mean?
                            "titleMap": getDatatypes(),
                            "type": "select",
                            "description": "An approximation of the datatype of the source field"
                        },
                        {
                            "key": "mappings[].substitution",
                            "title": "Substitution"
                        }
                    ]
                }
            ]
        },

        {
            "type": "submit",
            "style": "btn-info",
            "title": "OK"
        }
    ];
}


export function getDatatypes() {
    return [
        {value: "integer", name: "integer - any integer, +/- within platform limit"},
        {value: "string", name: "String - any length"},
        {value: "string(255)", name: "String, fixed length of 255 characters"},
        {value: "string(3000)", name: "String, fixed length of 3000 characters (max for db2 with some leeway)"},
        {value: "float", name: "Float - any floating number"},
        {value: "serial", name: "Serial - an incrementing integer in postgresSQL, cmp. identity"},
        {value: "timestamp", name: "Timestamp - any ISO 8601 compatible value"},
        {value: "boolean", name: "Boolean - can be either True or False"},
        {value: "blob", name: "BLOB - Binary Large OBject, usually a file."}
    ];
}

export function getResourcetypes() {
    return [
        {value: "FLATFILE", name: "A flat text file, fixed width or comma-separated"},
        {value: "XPATH", name: "XPath - XML, XHTML, JSON, any tree that can be managed via XPath"},
        {
            value: "RDBMS",
            name: "Relational database - Supported are MySQL, PostgreSQL, Oracle, DB2, SQL Server and SQLite"
        },
        {value: "SPREADSHEET", name: "Spreadsheet - A spreadsheet file (Excel, Open office, Numbers etc)"},
        {value: "MATRIX", name: "Matrix - An in-memory 2-d matrix"}
    ];
}

