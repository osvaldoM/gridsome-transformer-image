class Transformer {
    static mimeTypes () {
        return ['image/jpeg', 'image/png']
    }

    parse (source) {
        //Perform any modifications to the binary source file here.
        return {

        };
    }

    extendNodeType ({ graphql }) {
        return {
            // custom GraphQL fields for transformed node
        }
    }
}

module.exports = Transformer
