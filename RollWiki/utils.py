def gen_wiki_dict(wiki):
    return {
        'id': wiki.id,
        'name': wiki.name,
        'time': wiki.time,
        'author': wiki.author,
        'content': wiki.content,
    }


def gen_doc_dict(doc):
    return {
        'id': doc.id,
        'name': doc.name,
        'time': doc.time,
        'author': doc.author,
        'content': doc.content,
    }
